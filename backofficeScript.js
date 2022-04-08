let CurrentPage = 1
const USERS_PER_PAGE = 4


function getTotalPages() {
    return Math.ceil(meals.length / MEALS_PER_PAGE)
}

function getShortText(text, maxSize = 30) {
    return text.length <= maxSize ? text : `${text.slice(0, maxSize)}...`
}

function deleteUser(id) {
    users = users.filter((users) => users.id !== id)
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
    const userNome = document.createElement('tr')
    userNome.textContent = getShortText(user.nome, 50)

    userNome.classList.add('user_nome')}


function createColumnEmail(meal) {
    const userEmail = document.createElement('tr')
    userEmail.textContent = getShortText(user.email, 50)

    userEmail.classList.add('user_email')

}

function createColumnCadastradoEm(user) {
    const userCadastro = document.createElement('tr')
    userCadastro.textContent = getShortText(user.created_at, 50)

    userCadastro.classList.add('user_created_at')


    return userCadastro
}

function createColumnActions(user) {
    const columnActions = document.createElement('div')
    columnActions.classList.add('user_colunm_actions')

    const editButton = createButtonElement('editar')
    editButton.classList.add('edit')

    const deleteButton = createButtonElement('excluir')
    deleteButton.classList.add('delete')
    deleteButton.addEventListener('click', () => deleteUser(user.id))

    columnActions.appendChild(editButton)
    columnActions.appendChild(deleteButton)

    return columnActions
}


function renderUsers(){
    const userData = getCurrentPageUsers()
    const userRows = createUserRows(userData)

    const usersContainer = document.querySelector('.users')
    usersContainer.replaceChildren()
    usersCards.forEach((userCard) => userContainer.appendChild(userCard))
}

function render() {
    const totalPages = getTotalPages()
    if (currentPage > totalPages) currentPage = totalPages

    renderPagination(totalPages)
    renderUsers()
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

function renderPagination(){
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

function render(){
    renderUsers()
    renderPagination()
}

render()