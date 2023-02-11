<?php

class Instuicao{
    # Declaração de variáveis
    private string $sigla;
    private string $nome;
    private string $pais;
    # Fim da declaração de variáveis

    //Construtor
    public function Instituicao(string $sigla, string $nome, string $pais)
    {
        $this->setSigla($sigla);
        $this->setNome($nome);
        $this->setPais($pais);
    }

    # Getters e Setters
    public function getSigla()
    {
        return $this->sigla;
    }

    public function setSigla(string $sigla)
    {
        $this->sigla = $sigla;
    }

    public function getNome()
    {
        return $this->nome;
    }

    public function setNome(string $nome)
    {
        $this->nome = $nome;
    }

    public function getPais()
    {
        return $this->pais;
    }

    public function setPais(string $pais)
    {
        $this->sigla = $pais;
    }
    # Fim dos Getters e Setters
}