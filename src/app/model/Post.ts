import { Theme } from "./Theme"
import { User } from "./User"

export class Post {
    public idPostagem: number
    public titulo: string
    public descricao: string
    public criador: User
    public temaRelacionado: Theme
}