# Menu dinâmico ExtJS com PHP

Este é um exemplo de Menu Dinâmico do ExtJS com PHP, digo com PHP mas pode ser feito em qualquer linguagem back-end.
Este repositório contém a pasta "app" de um Projeto Ext, na versão 5.1.

O menu é customizado pelo arquivo "menu.php". Como segue abaixo:

<code>
<?php<br>
<br>
$menu = [];<br>
$menu[]["title"] = "Gerenciar";<br>
$menu[]["title"] = "Relatórios";<br>
$menu[]["title"] = "Contratos";<br><br>

$i = 0;<br>
foreach($menu as $key => $value) {<br>
	$menu[$key]["items"] = ["xtype" => "treepanel", "expanded" => true, "rootVisible" => false, "border" => 0];<br>
	$menu[$key]["items"]["root"]["children"] = [];<br>
	$menu[$key]["items"]["root"]["children"][0]["text"] = "Nota Fiscal1";<br>
	$menu[$key]["items"]["root"]["children"][0]["leaf"] = true;<br>
	$menu[$key]["items"]["root"]["children"][1]["text"] = "Nota Fiscal2";<br>
	$menu[$key]["items"]["root"]["children"][1]["leaf"] = true;<br>
	$menu[$key]["items"]["root"]["children"][2]["text"] = "Nota Fiscal3";<br>
	$menu[$key]["items"]["root"]["children"][2]["leaf"] = true;<br>
	$menu[$key]["items"]["root"]["children"][3]["text"] = "Nota Fiscal4";<br>
	$menu[$key]["items"]["root"]["children"][3]["leaf"] = true;<br>
	++$i;<br>
}<br><br>

echo json_encode($menu);<br>

?>
</code>

Este arquivo gerará um menu assim:

Gerenciar
	- Nota Fiscal1
	- Nota Fiscal2
	- Nota Fiscal3
	- Nota Fiscal4
Relatórios
	- Nota Fiscal1
	- Nota Fiscal2
	- Nota Fiscal3
	- Nota Fiscal4
Contratos
	- Nota Fiscal1
	- Nota Fiscal2
	- Nota Fiscal3
	- Nota Fiscal4

Portanto, a partir deste arquivo você pode se conectar a qualquer banco de dados (MySQL, PostgreSQL, etc...), e gerar um menu dinamicamente.