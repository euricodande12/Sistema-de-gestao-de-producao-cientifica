<?php
require_once 'Publicacao.php';
require_once 'Congresso.php';
class TrabalhoDeCongresso extends Publicacao{
    # Declaração de atributos
    private int $numInicialDePagina;
    private int $numFinalDePagina;
    private $nomeDoCongresso;
    # Fim da declaração de atributos

    // Método construtor
    public function TrabalhoDeCongresso($numInicialDePagina, $numFinalDePagina, $nomeDoCongresso)
    {
        $this->setNumInicialDePagina($numInicialDePagina);
        $this->setNumFinalDePagina($numFinalDePagina);
        $this->setNomeDoCongresso($nomeDoCongresso);
    }

    # Getters e Setters
	public function getNumInicialDePagina()
    {
		return $this->numInicialDePagina;
	}
	
	public function setNumInicialDePagina(int $numInicialDePagina)
    {
		$this->numInicialDePagina = $numInicialDePagina;
	}

	public function getNumFinalDePagina()
    {
		return $this->numFinalDePagina;
	}
	
	public function setNumFinalDePagina(int $numFinalDePagina)
    {
		$this->numFinalDePagina = $numFinalDePagina;
	}

	public function getNomeDoCongresso() 
    {
		return $this->nomeDoCongresso;
	}

	public function setNomeDoCongresso($nomeDoCongresso){
		$this->nomeDoCongresso = $nomeDoCongresso;
	}
    # Fim dos Getters e Setters
}