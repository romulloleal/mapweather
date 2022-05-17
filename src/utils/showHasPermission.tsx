import { useAuth } from "../providers/Auth";

/**
     * Verifica se o usuário logado possui a permissão do recurso.
     * @param permission Permissão do recurso.
     * @returns Boolean - true se o usuário possui a permissão ou false se não possuir.
     * 
     * @observação Deve ser utilizada em todas as ações nas telas de CRUD do sistema.
*/
const ShowHasPermission = (permission?: string) => {

  const { user } = useAuth()

  if (!user) {
    return false;
  }

  if (!permission) {
    return true
  }

  const hasPermission = user.permissions.includes(permission)

  if (hasPermission) {
    return true
  }

  return false
}

export default ShowHasPermission