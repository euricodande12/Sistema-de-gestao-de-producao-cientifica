<?php
require_once 'Publicacao.php';
require_once 'Periodico.php';
class ArtigoPeriodico extends Publicacao{
    # Declaração de atributos
    private int $numPaginaInicial;
    private int $numPaginaFinal;
    private int $volume;
    private int $numeroDaEdicao;
    private $nomeDoPeriodico;
    # Fim da declaração de atributos

    // Método construtor
    public function ArtigoPeriodico($numPaginaInicial, $numPaginaFinal, $volume, $numeroDaEdicao, $nomeDoPeriodico)
    {
        $this->setNumPaginaInicial($numPaginaInicial);
        $this->setNumPaginaFinal($numPaginaFinal);
        $this->setVolume($volume);
        $this->setNumeroDaEdicao($numeroDaEdicao);
        $this->setNomeDoPeriodico($nomeDoPeriodico);
    }
    
    # Getters e Setters
	public function getNumPaginaInicial()
    {
		return $this->numPaginaInicial;
	}

	public function setNumPaginaInicial(int $numPaginaInicial)
    {
		$this->numPaginaInicial = $numPaginaInicial;
	}

	public function getNumPaginaFinal()
    {
		return $this->numPaginaFinal;
	}
	
	public function setNumPaginaFinal(int $numPaginaFinal)
    {
		$this->numPaginaFinal = $numPaginaFinal;
	}

	public function getVolume()
    {
		return $this->volume;
	}

	public function setVolume(int $volume)
    {
		$this->volume = $volume;

	}

	public function getNumeroDaEdicao()
    {
		return $this->numeroDaEdicao;
	}
	
	public function setNumeroDaEdicao(int $numeroDaEdicao)
    {
		$this->numeroDaEdicao = $numeroDaEdicao;
	}

	public function getNomeDoPeriodico() {
		return $this->nomeDoPeriodico;
	}
	
	public function setNomeDoPeriodico($nomeDoPeriodico)
    {
		$this->nomeDoPeriodico = $nomeDoPeriodico;
	}
    # Fim dos Getters e Setters
}