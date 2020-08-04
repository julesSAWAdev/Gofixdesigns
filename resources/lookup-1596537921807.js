(function(window, undefined) {
  var dictionary = {
    "72efe7fe-f7a3-4064-87c5-f8c3cff7ae58": "Recover password",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash screen",
    "103b59f8-67a2-4241-92e5-147961508e84": "Settings",
    "6053f5a8-1ff8-49b9-81c6-f810dbdb9a37": "Report",
    "abcef1da-2e55-4421-a438-217d93441dc9": "Account",
    "24f20b77-308e-4c53-8c5f-5e2dae4bf3c2": "History",
    "9452cc48-b999-44a6-b15f-a47b5c6755ae": "Home",
    "a0472223-f5c1-4e87-8c4a-5fce6e2b038d": "Login",
    "39307af9-b30d-4161-8f67-4784440227db": "Vehicles",
    "4db43524-a57e-43d0-98a7-ec4a6d75ab25": "Register",
    "24d1d0eb-ae59-471c-9537-41140da459b5": "Edit Vehicle",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);