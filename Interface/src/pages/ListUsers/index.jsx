import { useEffect, useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'


import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"


import { Container, ContainerUsers, CardUsers, TrashIcon, Title, AvatarUser } from "./styles"
import Trahs from "../../assets/trash.svg"


function ListUsers() {

   const [users, setUsers] = useState([])
   const navigate = useNavigate()

   useEffect(() => {

      async function getUsers() {
         const { data } = await api.get('/usuarios')
         setUsers(data)
      }

      getUsers()

   }, [])

   async function deleteUsers(id) {

      await api.delete(`/usuarios/${id}`)

      const upadatedUsers = users.filter( user => user.id !== id)
      setUsers(upadatedUsers)
   }


   return (


      <Container>
         <TopBackground />

         <Title> Lista de Usuários</Title>


         <ContainerUsers>

            {users.map((user) => (

               <CardUsers key={user.id}>
                  <AvatarUser />
                  <div>
                     <h3>{user.name}</h3>
                     <p>{user.age}</p>
                     <p>{user.email}</p>


                  </div>

                  <TrashIcon src={Trahs} alt='icone-lixo' onClick={() => deleteUsers(user.id)} />
               </CardUsers>
            ))}
         </ContainerUsers>

         <Button type="button" onClick={() => navigate('/')} >voltar</Button>
      </Container >

   )
}

export default ListUsers

