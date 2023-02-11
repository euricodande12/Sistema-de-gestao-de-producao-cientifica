<?php

class Usuario{
    # Declaração de atributos
    protected string $nome;
    protected string $email;
    protected string $senha;
    protected int $nivelDeAcesso;
    # Fim da declaração de atributos

    // Método construtor
    public function Usuario($nome, $email) 
    {
        $this->setNome($nome);
        $this->setEmail($email);
    }

    # Getters e Setters
	public function getNome() 
    {
		return $this->nome;
	}
	
	public function setNome(string $nome) 
    {
        if ($nome != "")
        {
            $this->nome = $nome;
        }
	}

    public function getEmail() 
    {
        return $this->email;
    }

    public function setEmail(string $email) 
    {
        if($email != "")
        {
            $this->email = $email;
        }
    }

    public function getSenha()
    {
        return $this->senha;
    }

    public function setSenha(string $senha)
    {
        if($senha != "")
        {
            $this->senha = $senha;
        }
    }

    public function getNivelDeAcesso()
    {
        return $this->nivelDeAcesso;
    }

    public function setNivelDeAcesso(int $nivelDeAcesso)
    {
        $this->nivelDeAcesso = $nivelDeAcesso;
    }
    # Fim dos Getters e Setters

    # Métodos diversos
    public function cadastrar(string $nome, string $email, string $senha/*, string $senhaRepetida*/)
    {
        if(isset($nome) && isset($email) && isset($senha)){
            $this->setNome($nome);
            $this->setEmail($email);
            $this->setSenha($senha);
            return true;
        }
        
        return false;
    }

    public function logar(string $email, string $senha)
    {
        if (isset($email) && isset($senha)) {
            $this->setNome($email);
            $this->setSenha($senha);
        }
    }

    public function verPublicacoes()
    {
        
    }

    public function fazerLogout()
    {
        
    }
    #   Fim dos métodos diversos
}