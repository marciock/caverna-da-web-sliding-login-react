export interface IProps{
    action:()=>void
   option:IOption
}

interface IOption{
    button:string
    title:string
    body:string
}