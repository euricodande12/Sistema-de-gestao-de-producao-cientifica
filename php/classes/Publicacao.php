<?php
require_once 'Pesquisador.php';
class Publicacao{
    # Declaração de atributos
    protected string $titulo;
    protected string $textoASerPublicado;
    protected string $nomeDoAutor;
    protected $referencia;
    protected string $qtdPubRef;
    protected string $tipo;
    # Fim da declaração de atributos

    // Método construtor
    public function Publicacao($titulo, $texto, $nomeDoAutor, $tipo)
    {
        $this->setTitulo($titulo);
        $this->setTextoASerPublicado($texto);
        $this->setNomeDoAutor($nomeDoAutor);
        $this->setTipo($tipo);
    }

    # Getters e Setters
	public function getTitulo()
    {
		return $this->titulo;
	}

	public function setTitulo(string $titulo)
    {
		$this->titulo = $titulo;
	}

	public function getTextoASerPublicado()
    {
		return $this->textoASerPublicado;
	}

	public function setTextoASerPublicado(string $textoASerPublicado)
    {
		$this->textoASerPublicado = $textoASerPublicado;
	}

	public function getNomeDoAutor()
    {
		return $this->nomeDoAutor;
	}

	public function setNomeDoAutor(string $nomeDoAutor)
    {
		$this->nomeDoAutor = $nomeDoAutor;
	}

	public function getReferencia()
    {
		return $this->referencia;
	}

	public function setReferencia(int $referencia)
    {
            $this->referencia = $referencia;
	}

	public function getQtdPubRef()
    {
		return $this->qtdPubRef;
	}
	
	public function setQtdPubRef(string $qtdPubRef)
    {
		$this->qtdPubRef = $qtdPubRef;
	}

	public function getTipo()
    {
		return $this->tipo;
	}

	public function setTipo(string $tipo)
    {
		$this->tipo = $tipo;
	}
    # Fim dos Getters e Setters

    #Métodos diversos
    public function referenciar($publicacaoReferenciada)
    {
        $this->setQtdPubRef(1);
        $this->setReferencia($publicacaoReferenciada);
    }
    public function referenciarDuas($primeiraPublicacaoReferenciada, $segundaPublicacaoReferenciada)
    {
        $this->setQtdPubRef(2);
        $this->referencia = [$primeiraPublicacaoReferenciada, $segundaPublicacaoReferenciada];
    }
    public function referenciarTres($primeiraPublicacaoReferenciada, $segundaPublicacaoReferenciada, $terceiraPublicacaoReferenciada)
    {
        $this->setQtdPubRef(3);
        $this->referencia = [$primeiraPublicacaoReferenciada, $segundaPublicacaoReferenciada, $terceiraPublicacaoReferenciada];
    }
}