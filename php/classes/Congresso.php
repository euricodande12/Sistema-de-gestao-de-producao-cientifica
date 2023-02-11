<?php 
class Congresso{
    # Declaração de atributos
    private string $sigla;
    private $anoEmQueOcorreu;
    private string $nome;
    private string $bairro;
    private string $rua;
    private string $edificio;
    # Fim da declaração de atributos

    // Método construtor
    public function Congresso($sigla, $nome, $ano)
    {
        $this->setSigla($sigla);
        $this->setNome($nome);
        $this->setAnoEmQueOcorreu($ano);
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

	public function getAnoEmQueOcorreu() 
    {
		return $this->anoEmQueOcorreu;
	}
	
	public function setAnoEmQueOcorreu($anoEmQueOcorreu)
    {
		$this->anoEmQueOcorreu = $anoEmQueOcorreu;
	}

	public function getNome()
    {
		return $this->nome;
	}
	
	public function setNome(string $nome)
    {
		$this->nome = $nome;
	}

	public function getBairro()
    {
		return $this->bairro;
	}
	
	public function setBairro(string $bairro)
    {
		$this->bairro = $bairro;
	}

	public function getRua()
    {
		return $this->rua;
	}

	public function setRua(string $rua)
    {
		$this->rua = $rua;
	}

	public function getEdificio()
    {
		return $this->edificio;
	}
	
	public function setEdificio(string $edificio)
    {
		$this->edificio = $edificio;
	}
    # Fim Getters e Setters
}