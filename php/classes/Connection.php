<?php
class Connection{
    private $pdo;
    public function Connection()
    {
        try
        {
            $this->pdo = new PDO("mysql:dbname=producaocientificadb;host=localhost", "root", "");
        }
        catch (PDOException $e) {
            echo "Erro com banco de dados: ". $e->getMessage();
        }
        catch (Exception $e) {
            echo "Erro generico: ". $e->getMessage();
        }
        
    }


    public function Instituicao(string $sigla, string $nome, string $pais)
    {
      $query = $this->pdo->prepare("INSERT INTO instituicao(sigla, nome, pais) VALUES(:s, :n, :p )");
      $query->bindValue(":s", $sigla);
      $query->bindValue(":n", $nome);
      $query->bindValue(":p", $pais);
      $query->execute();
    }
}