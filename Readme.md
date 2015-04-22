# Menu dinâmico ExtJS com PHP

Este é um exemplo de Menu Dinâmico do ExtJS com PHP, digo com PHP mas pode ser feito em qualquer linguagem back-end.
Este repositório contém a pasta "app" de um Projeto Ext, na versão 5.1.

O menu é customizado pelo arquivo "menu.php". Como segue abaixo:

<code>
<?php

$menu = [];\n
$menu[]["title"] = "Gerenciar";\n
$menu[]["title"] = "Relatórios";\n
$menu[]["title"] = "Contratos";\n\n

$i = 0;\n
foreach($menu as $key => $value) {\n
	$menu[$key]["items"] = ["xtype" => "treepanel", "expanded" => true, "rootVisible" => false, "border" => 0];\n
	$menu[$key]["items"]["root"]["children"] = [];\n
	$menu[$key]["items"]["root"]["children"][0]["text"] = "Nota Fiscal1";\n
	$menu[$key]["items"]["root"]["children"][0]["leaf"] = true;\n
	$menu[$key]["items"]["root"]["children"][1]["text"] = "Nota Fiscal2";\n
	$menu[$key]["items"]["root"]["children"][1]["leaf"] = true;\n
	$menu[$key]["items"]["root"]["children"][2]["text"] = "Nota Fiscal3";\n
	$menu[$key]["items"]["root"]["children"][2]["leaf"] = true;\n
	$menu[$key]["items"]["root"]["children"][3]["text"] = "Nota Fiscal4";\n
	$menu[$key]["items"]["root"]["children"][3]["leaf"] = true;\n
	++$i;\n
}\n\n

echo json_encode($menu);\n\n

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