var xmlAction = (function () {
//ie
    var cre = function () {
        try {
            xmldoc = new ActiveXObject("scripting.FileSystemObject");
            path = "G:\\WEB\\PRACTICE\\xml\\a";

            if (!xmldoc.FolderExists(path)) {   // 若当前路径不存在，则创建此路径。
                xmldoc.CreateFolder(path);
            }
            path += "text.xml";
            tf = xmldoc.CreateXML(path, true)   // 创建新文件。
            var reader = new FileReader();
            reader.createProcessingInstruction()
        } catch (e) {
            console.log(e.message);
        }
    };

    var xml = function () {

        //创建xml

        var doc = new ActiveXObject("Microsoft.XMLDOM");


        //创建一个根节点，并添加到xml

        var Root = doc.createElement("Description");

        doc.appendChild(Root);


        //向根节点添加属性，setAttribute(key , value);

        Root.setAttribute("operation", "search");

        Root.setAttribute("eco_no", document.all("txtECONO").value);

        Root.setAttribute("eco_name", document.all("drpEcoName").options[documeng.all("drpEcoName").selectedIndex].value);


        //将xml的值赋给一个hidden控件

        document.getElementById("hidXml").value = doc.xml;

    };
    var CreateXML = function () {

        var xmldoc, xmlnode;

        xmldoc = new ActiveXObject("Microsoft.XMLDOM");

        xmldoc.load("G:\\XML.xml");

        schar = '\r';

        xmlhead = '<?xml version="1.0" encoding="UTF-16" ?>' + schar;

        xmltitle = '<documenttitle="information">' + schar;

        xmlnode = '';

        for (var i = 0; i < 10; i++) {

            xmlnode = xmlnode + '<xmlnode type="node" name="node' + i + '" />' + schar;

        }

        xmlfoot = '</document>';

        strXML = xmlhead + xmltitle + xmlnode + xmlfoot;

        xmldoc.loadXML(strXML);

        xmldoc.save("G:\\XML.xml");

    }

    return {create_path: cre, xml: xml, CreateXML: CreateXML}
})();
