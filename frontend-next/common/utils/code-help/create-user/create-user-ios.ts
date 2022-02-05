
import {codeHelpType} from "../code-help-type";

const res = (envId: string, data:codeHelpType, userId:string) =>  `import FlagsmithClient

func application(_ application: UIApplication,
 didFinishLaunchingWithOptions launchOptions:
  [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

  Flagsmith.shared.apiKey = "${envId}"

  // This will create a user in the dashboard if they don't already exist
  // Check for a feature
  Flagsmith.shared
  .hasFeatureFlag(withID: "${data.FEATURE_NAME}", forIdentity: "${data.USER_ID}") { (result) in
      print(result)
  }

  // Or, use the value of a feature
  Flagsmith.shared
  .getFeatureValue(withID: "${data.FEATURE_NAME_ALT}", forIdentity: "${data.USER_ID}") { (result) in
      switch result {
      case .success(let value):
          print(value ?? "nil")
      case .failure(let error):
          print(error)
      }
  }
}`;

module.exports = res;
