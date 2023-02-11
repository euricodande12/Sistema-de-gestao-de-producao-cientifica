<?php
class Periodico{
    # Declaração de atributos
    private string $editora;
    private string $nome;
    #Fim da declaração de atributos

    // Método construtor
    public function Periodico(string $editora, string $nome)
    {
        $this->setEditora($editora);
        $this->setNome($nome);
    }

	public function getEditora()
    {
		return $this->editora;
	}
	
	public function setEditora(string $editora)
    {
		$this->editora = $editora;
	}

	public function getNome()
    {
		return $this->nome;
	}
	
	public function setNome(string $nome)
    {
		$this->nome = $nome;
	}
}