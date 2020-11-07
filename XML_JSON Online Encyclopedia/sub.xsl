<?xml version = "1.0"?>
<xsl:stylesheet version = "1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
<xsl:output method = "html" omit-xml-declaration = "no" doctype-system = "http://www.w3c.org/TR/xhtml1/DTD/xhtml1-strict.dtd" 
doctype-public = "-//W3C//DTD XHTML 1.0 Strict//EN"/>
    <xsl:template match ="/">
        <html>
            <head>
                <title>Subscriber List</title>
            </head>
            <body>
                <table border="1" bgcolor="lightblue">
                    <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th> Area of Interest </th>
                        <th> Email </th>
                        <th> Frequency </th>
                    </tr>
                    </thead>
                    <xsl:for-each select = "/subscriber/person">
                        <tr>
                            <td>
                                <xsl:value-of select = "@id" />
                            </td>
                            <td>
                                <xsl:value-of select = "name" />
                            </td>
                            <td>
                                <xsl:value-of select = "aoi" />
                            </td>
                            <td>
                                <xsl:value-of select = "email" />
                            </td>
                            <td>
                                <xsl:value-of select = "frequency" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>