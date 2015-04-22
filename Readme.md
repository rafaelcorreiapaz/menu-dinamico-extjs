# Menu dinâmico ExtJS com PHP

Este é um exemplo de Menu Dinâmico do ExtJS com PHP, digo com PHP mas pode ser feito em qualquer linguagem back-end.
Este repositório contém a pasta "app" de um Projeto Ext, na versão 5.1.

O menu é customizado pelo arquivo "menu.php". Como segue abaixo:

```php
<?php

$menu = [];
$menu[]["title"] = "Gerenciar";
$menu[]["title"] = "Relatórios";
$menu[]["title"] = "Contratos";

$i = 0;
foreach($menu as $key => $value) {
	$menu[$key]["items"] = ["xtype" => "treepanel", "expanded" => true, "rootVisible" => false, "border" => 0];
	$menu[$key]["items"]["root"]["children"] = [];
	$menu[$key]["items"]["root"]["children"][0]["text"] = "Nota Fiscal1";
	$menu[$key]["items"]["root"]["children"][0]["leaf"] = true;
	$menu[$key]["items"]["root"]["children"][1]["text"] = "Nota Fiscal2";
	$menu[$key]["items"]["root"]["children"][1]["leaf"] = true;
	$menu[$key]["items"]["root"]["children"][2]["text"] = "Nota Fiscal3";
	$menu[$key]["items"]["root"]["children"][2]["leaf"] = true;
	$menu[$key]["items"]["root"]["children"][3]["text"] = "Nota Fiscal4";
	$menu[$key]["items"]["root"]["children"][3]["leaf"] = true;
	++$i;
}

echo json_encode($menu);

?>
```

###Este arquivo gerará um menu assim:

####Gerenciar:
* Nota Fiscal1.
* Nota Fiscal2.
* Nota Fiscal3.
* Nota Fiscal4.
####Relatórios:
* Nota Fiscal1.
* Nota Fiscal2.
* Nota Fiscal3.
* Nota Fiscal4.
####Contratos:
* Nota Fiscal1.
* Nota Fiscal2.
* Nota Fiscal3.
* Nota Fiscal4.

Portanto, a partir deste arquivo você pode se conectar a qualquer banco de dados (MySQL, PostgreSQL, etc...), e gerar um menu dinamicamente.