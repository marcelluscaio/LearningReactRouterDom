import styled from "styled-components";

const Wrapper = styled.div`
   padding: 3rem 7.5rem 6.25rem;
    background-color: var(--azul-escuro);
    color: var(--branco);
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const Apresentacao = styled.div`
`

const Titulo = styled.h1`
   font-size: 4rem;
   margin-top: 4.875rem;
   margin-bottom: 2rem;
`

const Paragrafo = styled.p`
   font-size: 1.5rem;
   line-height: 2rem;
   margin-bottom: 2rem;
` 

function Banner(){
   return(
      <Wrapper>
         <Apresentacao>
            <Titulo>Olá, mundo</Titulo>
            <Paragrafo>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque tenetur inventore neque soluta quam natus, ex voluptates expedita in accusamus officiis numquam reiciendis, tempore animi fugit a cupiditate rerum nostrum!</Paragrafo>
         </Apresentacao>
      </Wrapper>
   )
}

export default Banner;