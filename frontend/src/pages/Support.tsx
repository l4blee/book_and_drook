import { Box, Typography } from "@suid/material"
import { Component } from "solid-js"
import { PeripheryNavigation } from "../components"
import { getUserData } from "../utils"
import sber from '../assets/sber.svg'
import monster from '../assets/supportMonster.svg'
import pic1 from '../assets/bought1.png'
import pic2 from '../assets/bought2.png'
import pic3 from '../assets/bought3.png'

const Support: Component = () => {
    const data = getUserData()

    return (
        <Box sx={{
            width: '100vw',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <PeripheryNavigation/>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                mt: '5vw'
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mr: '5vw'
                }}>
                    <Typography sx={{
                        textTransform: 'uppercase',
                        fontSize: '2vw',
                        fontFamily: 'Actay',
                        letterSpacing: '0.1rem',
                        width: '40vw'
                    }}>
                        <span style='color: #E15F41;'>Укажите в комментариях библиотеку</span>, которую вы хотите поддержать,
                        так мы сможем купить для неё книги.
                        А также укажите свой <span style='color: #E15F41;'>логин({data() && data()?.nickname})</span>, чтобы мы смогли зачислить Вам бонусы.
                    </Typography>
                    <Typography sx={{
                        textTransform: 'uppercase',
                        fontSize: '2vw',
                        fontFamily: 'Actay',
                        letterSpacing: '0.1rem',
                        width: '35vw',
                        mt: '5vw'
                    }}>
                        Реквизиты для поддержки библиотеки:<br/>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <img width='10%' src={sber}/><span style='color: #209F34; font-weight: bold; margin-left: .5vw;'>+7(913)745-39-27</span>
                        </Box>
                    </Typography>
                </Box>
                <Box sx={{
                    width: '45vw',
                    height: '35vw'
                }}>
                    <img height='50%' src={monster} style='margin-right: 1vw'/>
                    <img height='50%' src={pic1} style='margin-right: 1vw'/>
                    <img height='50%' src={pic2}/><br/>
                    <img height='50%' src={pic3}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Support