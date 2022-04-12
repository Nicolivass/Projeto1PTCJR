let CurrentPage = 1
const USERS_PER_PAGE = 4

function deleteUser(id) {
    user = user.filter((user) => user.id !== id)
    render()
}

function getCurrentPageUsers(){
    const startIndex = (CurrentPage - 1) * USERS_PER_PAGE
    const endIndex =  startIndex + USERS_PER_PAGE

    return users.slice(startIndex, endIndex)
}

function createButtonElement(textContent) {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = textContent
    buttonElement.type = 'button'
    return buttonElement
}

function createColumnNome(user){
    const columnNome = document.createElement('td')
    columnNome.textContent = `${user.first_name} ${user.last_name}`
    columnNome.classList.add('nome_column')

    return columnNome
}

function createColumnEmail(user){
    const columnEmail = document.createElement('td')
    columnEmail.textContent = user.email
    columnEmail.classList.add('email_column')
    
    return columnEmail
}

function createColumnCadastradoEm(user){
    const columnCadastradoEm = document.createElement('td')
    columnCadastradoEm.textContent = user.created_at
    columnCadastradoEm.classList.add('cadastro_column')

    return columnCadastradoEm
}

function createColumnEditar(user){
    const editButton = document.createElement('button')
    editButton.type = 'button'
    editButton.classList.add('edit')
    editButton.textContent = 'editar'

    return editButton
}

function createColumnExcluir(user){
    const deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.classList.add('delete')
    deleteButton.textContent = 'excluir'

    return deleteButton
}


function createFixedRow(){
    const fixedRow = document.createElement('thead')
    fixedRow.classList.add('fixed_row')

    return fixedRow
}

function createUserRow(user){
    const userData = document.createElement('tr')
    userRow.id = user.id
    userRow.classList.add('user_row')

    const columnNome = createColumnNome(user)
    const columnEmail = createColumnEmail(user)
    const columnCadastradoEm = createColumnCadastradoEm(user)
    const columnEditar = createColumnEditar(user)
    const columnExcluir = createColumnExcluir(user) 
}

function createUserRows(userData){
    return userData.map(createUserRow)
}


function renderUsers(){
    const userData = getCurrentPageUsers()
    const userRows = createUserRows(userData)

    const userContainer = document.querySelector('.users')
    userContainer.replaceChildren()
    userRows.forEach((userRows) => {useContainer.appendChild(userRows)})
}
}

function render() {
    const totalPages = getTotalPages()
    if (currentPage > totalPages) currentPage = totalPages

    //renderPagination(totalPages)
    renderUsers()
}

/*criar a dinamica*/
function render(){
    /*tabela*/
    renderUsers()
    /*paginação*/
    //renderPagination()
}

render()