<?php
class Connection{
    public function Connection()
    {
        try
        {
            $pdo = new PDO("mysql:dbname=CRUDPDO;host=localhost", "root", "");
        }
        catch (PDOException $e) {
            echo "Erro com banco de dados: ". $e->getMessage();
        }
        catch (Exception $e) {
            echo "Erro generico: ". $e->getMessage();
        }
        
    }
}