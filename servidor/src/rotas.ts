import { Router } from "express";
import { prisma } from "./prisma";

export const rotas = Router()

rotas.get('/', async (req, res) => {
    const pokemons = await prisma.pokemon.findMany()
    res.json(pokemons)

})

rotas.post('/create', async (req, res) => {
    const {nometreinador, idadetreinador, generotreinador,
     tipopokemon, nomepokemon, cidadepokemon } = req.body

     const escolherPokemon = await prisma.pokemon.create({
        data:{
            tipopokemon: tipopokemon,
            nometreinador: nometreinador,
            nomepokemon: nomepokemon,
            idadetreinador: idadetreinador,
            generotreinador: generotreinador,
            cidadepokemon: cidadepokemon,
        }

     }) 
     res.json(escolherPokemon)
     



 })
rotas.delete('/delete/:id', async (req, res) => { 
    const {id} = req.params
    const deletepokemon = await prisma.pokemon.delete({
        where:{
            id: id
        }
    })
    res.json("Pokemon excluído!")

})

rotas.put('/edit/:id', async (req, res) => { 
    const {id} = req.params
    const{tipopokemon} = req.body
    const editarpokemon = await prisma.pokemon.update({
        where:{

            id: id
        },
        data: {

            tipopokemon: tipopokemon
        }
    })
    res.json("Pokemon editado com sucesso!")
})

