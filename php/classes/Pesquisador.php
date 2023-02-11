<?php
include_once 'Usuario.php';
include_once 'Instituicao.php';
include_once 'TrabalhoDeCongresso.php';
include_once 'ArtigoPeriodico.php';
class Pesquisador extends Usuario{
    // Atributos
    private $instituicaoDeTrabalho;

    // Método construtor
    public function Pesquisador() 
    {
    }

    // Getter e Setter
	public function getInstituicaoDeTrabalho() 
    {
		return $this->instituicaoDeTrabalho;
	}
	
	public function setInstituicaoDeTrabalho($instituicaoDeTrabalho) 
    {
		$this->instituicaoDeTrabalho = $instituicaoDeTrabalho;
	}

    # Métodos diversos
    public function publicarTrabalhoDeCongresso($trabalhoDeCongresso)
    {
        # code...
    }

    public function publicarArtigoPeriodico($artigoPeriodico)
    {
        # code...
    }

    public function editarTrabalhoDeCongresso($trabalhoDeCongresso)
    {
        # code...
    }

    public function editarArtigoPeriodico($artigoPeriodico)
    {
        # code...
    }

    public function excluirTrabalhoDeCongresso($trabalhoDeCongresso)
    {
        # code...
    }

    public function excluirArtigoPeriodico($artigoPeriodico)
    {
        # code...
    }
}