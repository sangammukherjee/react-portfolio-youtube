import Particles from "react-tsparticles";
import options from '../../data/particlesConfig'
import { useCallback } from "react";
import { loadFull } from "tsparticles";



export default function ParticlesComponent(){

    const particlesInit = useCallback(async (engine)=> {
        await loadFull(engine)
    },[])

    const particlesLoaded = useCallback(async (container)=> {
        await console.log(container)
    },[])

    return (
        <Particles
        id="partciles-component"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
        />
    )
}