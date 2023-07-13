import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

import * as Styled from './Login.style';
import { InputComponent } from '../Form/Input/Input.component';

export const FormLoginComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();

  const submitForm = (data) => {
    console.log(data)
  }

  const redirectToHome = () => {
    navigate('./home')
  }

  return(
    <Styled.Form onSubmit={handleSubmit(submitForm)}>
      <Styled.Header>
        <Styled.Title>Login</Styled.Title>
        <Styled.SubTitle>Para acessar o sistema digite seu email e sua senha.</Styled.SubTitle>
      </Styled.Header>

      <Styled.InputGroup>
          <InputComponent
          id='email' 
          type='email' 
          placeholder='Digite seu E-mail' 
          label='E-mail'
          register={{...register('email', {
            required: true, 
            validate: {matchPath: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)}
          })
        }}
        error={ errors.email }
          />

          <InputComponent 
          id='repeat-password' 
          type='password' 
          placeholder='Digite sua Senha' 
          label='Senha'
          register={{...register('password', {required: true, minLength: 8})}}
          
          />
      </Styled.InputGroup>

      <Styled.Button $active={ !errors.email && !errors.password } type='submit' disabled={ errors.email || errors.password }>Entrar</Styled.Button>

      <Styled.Action>
        <Styled.EsqueciSenha>Esqueci minha senha</Styled.EsqueciSenha>
        <Styled.Button $outlined={true} type='button'>Criar conta</Styled.Button>
      </Styled.Action>
    </Styled.Form>
  )
}