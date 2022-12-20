describe('Tests for Great Minds Think Alike', ()=>{
    //describe('Test the shuffleArray function', ()=>{})
  
    describe('Test the calculateWinner function', ()=>{

        it('Should return the teams with the most Points', ()=>{
            const teams = []
            teams.push(new Team('Red',13)) 
            teams.push(new Team('Blue', 16))
            expect(calculateWinner(teams)).toBe('Blue')

            teams[0].addPoints(10)
            expect(calculateWinner(teams)).toBe('Red')
        })

        it('Should return 0 if teams are tied', ()=>{
            const teams = []
            teams.push(new Team('Red',13)) 
            teams.push(new Team('Blue',13)) 
            expect(calculateWinner(teams)).toBe(0)
        })
    })
})