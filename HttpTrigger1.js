module.exports = async function (context, req) {
  if (req.method === "POST") {
    // Save theme settings
    const { selectedComp, themeRawData } = req.body;
    console.log("Received theme settings for company:", selectedComp);
    console.log("Theme settings data:", themeRawData);
    context.bindings.outputDocument = {
        id: selectedComp,
        themeConfig: themeRawData
        };
    context.res = {
      status: 200,
      body: selectedComp,
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
      "collectionName": "MyCollection",
      "createIfNotExists": true
    }
  ]
}*/