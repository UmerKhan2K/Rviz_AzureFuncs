module.exports = async function (context, req) {
    var bookmark = context.bindings.outputDocument

    if(bookmark){
        context.res = {
        body: { "output":bookmark.themeConfig },
        
        };
    }
    else {
        context.res = {
            status: 404,
            body : "No configs found",
            headers: {
            'Content-Type': 'application/json'
            }
        };
    }

    context.done();
 
}
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
      "direction": "in",
      "type": "cosmosDB",
      "connectionStringSetting": "brandtheme_DOCUMENTDB",
      "databaseName": "outDatabase",
      "collectionName": "MyCollection",
      "id": "{id}"
    }
  ]
}*/