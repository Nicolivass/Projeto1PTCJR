let currentPage = 1
const USERS_PER_PAGE = 5


function getTotalPages() {
    return Math.ceil(users.length / USERS_PER_PAGE)
}

function deleteUser(id) {
    users = users.filter((user) => user.id !== id)
    render()
}
function createButtonElement(textContent) {
    const buttonElement = document.createElement('button')
    console.log("testetste")
    buttonElement.textContent = textContent
    buttonElement.type = 'button'
    return buttonElement
}

function getcurrentPageUsers(){
    const startIndex = (currentPage - 1) * USERS_PER_PAGE
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

    deleteButton.addEventListener('click', () => deleteUser(user.id))

    return deleteButton
}


function createFixedRow(){
    const fixedRow = document.createElement('thead')
    fixedRow.classList.add('fixed_row')

    return fixedRow
}

function createUserRow(user){
    const userRow = document.createElement('tr')
    userRow.id = user.id
    userRow.classList.add('user_row')

    const columnNome = createColumnNome(user)
    const columnEmail = createColumnEmail(user)
    const columnCadastradoEm = createColumnCadastradoEm(user)
    const columnEditar = createColumnEditar(user)
    const columnExcluir = createColumnExcluir(user)
    
    userRow.appendChild(columnNome)
    userRow.appendChild(columnEmail)
    userRow.appendChild(columnCadastradoEm)
    userRow.appendChild(columnEditar)
    userRow.appendChild(columnExcluir)

    return userRow
}

function createUserRows(userData){
    return userData.map(createUserRow)
}

function renderUsers(){
    const userData = getcurrentPageUsers()
    const userRows = createUserRows(userData)

    const userContainer = document.querySelector('.users')
    userContainer.replaceChildren()
    userRows.forEach((userRows) => {userContainer.appendChild(userRows)})
}

function render(){
    renderUsers()
    const totalPages = getTotalPages()
    if (currentPage > totalPages) currentPage = totalPages
    renderPagination(totalPages)
}

function changePage(newPage) {
    const totalPages = getTotalPages()
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage
        render()
    }
}

function createPrevPageButton() {
    const prevPageButton = createButtonElement('<<')
    prevPageButton.addEventListener('click', () => {
        changePage(currentPage - 1)
    })
    return prevPageButton
}

function createNextPageButton() {
    const nextPageButton = createButtonElement('>>')
    nextPageButton.addEventListener('click', () => {
        changePage(currentPage + 1)
    })
    return nextPageButton
}

function createPaginationButton(page) {
    const paginationButton = createButtonElement(page)
    if (page === currentPage) paginationButton.classList.add('active')
    paginationButton.addEventListener('click', () => changePage(page))

    return paginationButton
}

function renderPagination(totalPages) {
    const pagination = document.querySelector('.pagination')
    pagination.replaceChildren()

    if (totalPages) {
        const prevPageButton = createPrevPageButton()
        pagination.appendChild(prevPageButton)

        for (let page = 1; page <= totalPages; page++) {
            const paginationButton = createPaginationButton(page)
            pagination.appendChild(paginationButton)
        }

        const nextPageButton = createNextPageButton()
        pagination.appendChild(nextPageButton)
    }
}
render()
