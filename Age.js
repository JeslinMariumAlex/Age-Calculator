function calculateAge() {
    const dateofbirth = new Date(document.getElementById('dateofbirth').value)
    const today = new Date()

    if (dateofbirth >= today) {
        alert('Please enter a valid Date Of Birth')
        return
    }
    const ageInMilliseconds = today - dateofbirth
    const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
    const age = Math.floor(ageInYears)

    document.getElementById('result').innerHTML = `Your current age is ${age} years.`
}