module.exports = async function (context, req) {
  if (req.method === "POST") {
    // Save theme settings
    const { selectedComp, menuItems } = req.body;
    console.log("Received theme settings for company:", selectedComp);
    console.log("Theme settings data:", menuItems);
    context.bindings.outputDocument = {
        id: selectedComp,
        config: menuItems
        };
    context.res = {
      status: 200,
      body: menuItems,
    };
  }  else {
    context.res = {
      status: 400,
      body: "Invalid request method",
    };
  }
};
/*Function.json
{
  "bindings": [
    {
      "authLevel": "FUNCTION",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": [
        "get",
        "post"
      ]
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    },
    {
      "name": "outputDocument",
      "direction": "out",
      "type": "cosmosDB",
      "connectionStringSetting": "brandtheme_DOCUMENTDB",
      "databaseName": "outDatabase",
      "collectionName": "NavConfig",
      "createIfNotExists": true
    }
  ]
}*/

