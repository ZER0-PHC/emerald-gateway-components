import Gateway from "../Gateway.cdc"
import GatewayModules from "../GatewayModules.cdc"

transaction(active: Bool, name: String, description: String, image: String, url: String, tokenPaths: [PublicPath], amounts: [UFix64], identifiers: [String]) {

  let Registry: &Gateway.Registry

  prepare(acct: AuthAccount) {
    // set up the Registry where users will store all their created events
    if acct.borrow<&Gateway.Registry>(from: Gateway.RegistryStoragePath) == nil {
      acct.save(<- Gateway.createEmptyRegistry(), to: Gateway.RegistryStoragePath)
      acct.link<&Gateway.Registry{Gateway.RegistryPublic}>(Gateway.RegistryPublicPath, target: Gateway.RegistryStoragePath)
    }

    self.Registry = acct.borrow<&Gateway.Registry>(from: Gateway.RegistryStoragePath)
                        ?? panic("Could not borrow the Registry from the signer.")
  }

  execute {
    let modules: [{Gateway.IModule}] = []
    var i = 0
    while i < identifiers.length {
      modules.append(GatewayModules.OwnsToken(_path: tokenPaths[i], amount: amounts[i], identifier: identifiers[i]))
      i = i + 1
    }
    self.Registry.createWhitelist(active: active, description: description, image: image, name: name, url: url, modules: modules, {})
    log("Started a new event.")
  }
}

