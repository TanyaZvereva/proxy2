export function getSkills({special}){
    return special.map((skill) =>{
        if(skill.hasOwnProperty("description")) {
           return {
            id: skill.id,
            name: skill.name,
            icon: skill.icon,
            description: skill.description
           }
        } else {
            return {
                id: skill.id,
                name: skill.name,
                icon: skill.icon,
                description: "Описание недоступно"
            }
        }
    })
}