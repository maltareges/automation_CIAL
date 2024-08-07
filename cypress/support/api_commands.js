//api List All Cellphones

Cypress.Commands.add('listAllCellphones', () => {
    const listAllCellphones = () => {
        cy.api({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false
        }).as('response')
          cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200)
            expect(response.statusText).to.equal('OK')
            expect(response.body).is.not.empty
            expect(response.body).to.length('13')
            expect(response.body[0].data).to.have.property('color','Cloudy White')
            expect(response.body[0].data).to.have.property('capacity','128 GB')
            expect(response.body[0]).to.have.property('id','1')
            expect(response.body[0]).to.have.property('name','Google Pixel 6 Pro')
          })
    }
    listAllCellphones()       
})

//api List Specific Cellphones

Cypress.Commands.add('listSpecificCellphones', () => {
  const listSpecificCellphones = () => {
      cy.api({
          method: 'GET',
          url: 'https://api.restful-api.dev/objects?id=3&id=5&id=10',
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          expect(response.status).to.equal(200)
          expect(response.statusText).to.equal('OK')
          expect(response.body).is.not.empty
          expect(response.body).to.length('3')
          expect(response.body[0].data).to.have.property('color','Cloudy White')
          expect(response.body[0].data).to.have.property('capacity GB',512)
          expect(response.body[0]).to.have.property('id','3')
          expect(response.body[0]).to.have.property('name','Apple iPhone 12 Pro Max')
          expect(response.body[1].data).to.have.property('price',689.99)
          expect(response.body[1].data).to.have.property('color','Brown')
          expect(response.body[1]).to.have.property('id','5')
          expect(response.body[1]).to.have.property('name','Samsung Galaxy Z Fold2')
          expect(response.body[2].data).to.have.property('Capacity','64 GB')
          expect(response.body[2].data).to.have.property('Screen size',7.9)
          expect(response.body[2]).to.have.property('id','10')
          expect(response.body[2]).to.have.property('name','Apple iPad Mini 5th Gen')
        })
  }
  listSpecificCellphones()       
})

//api List Cellphones through ID

Cypress.Commands.add('listCellphonesId', () => {
  const listCellphonesId = () => {
      cy.api({
          method: 'GET',
          url: 'https://api.restful-api.dev/objects/7',
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          expect(response.status).to.equal(200)
          expect(response.statusText).to.equal('OK')
          expect(response.body).is.not.empty
          expect(response.body.data).to.have.property('year',2019)
          expect(response.body.data).to.have.property('CPU model','Intel Core i9')
          expect(response.body.data).to.have.property('price',1849.99)
          expect(response.body.data).to.have.property('Hard disk size','1 TB')
          expect(response.body).to.have.property('id','7')
          expect(response.body).to.have.property('name','Apple MacBook Pro 16')
        })
  }
  listCellphonesId()       
})


//Create Cellphone

Cypress.Commands.add('createCellphone', () => {
  const createCellphone = () => {
      cy.api({
          method: 'POST',
          url: 'https://api.restful-api.dev/objects',
          body: { 
            "name": "Apple MacBook Atual",
            "data": {
               "year": 2024,
               "price": 2024.99,
               "CPU model": "Intel Core i7",
               "Hard disk size": "2 TB"
            }
          },          
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          expect(response.status).to.equal(200)
          expect(response.body.data).to.have.property('year',2024)
          expect(response.body.data).to.have.property('CPU model','Intel Core i7')
          expect(response.body.data).to.have.property('price',2024.99)
          expect(response.body.data).to.have.property('Hard disk size','2 TB')
          expect(response.body).to.have.property('name','Apple MacBook Atual')
          //const respId = response.body.id
          //return respId
        })  
        
  }
  createCellphone()       
})

//Update Cellphone

Cypress.Commands.add('updateCellphone', () => {
  const updateCellphone = () => {
      cy.api({
          method: 'PUT',
          url: 'https://api.restful-api.dev/objects/ff80818191273337019127cf647601ee',
          body: { 
                 "name": "Segundo teste de API",
                 "data": {
                 "year": 2024,
                 "price": 3000.99,
                 "CPU model": "Intel Core i9",
                 "Hard disk size": "512 GB",
                 "color": "silver"
   }
                },
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          const id = (response.body.id)
          expect(response.status).to.equal(200)
          expect(response.body).to.have.property('name','Segundo teste de API')
          expect(response.body.data).to.have.property('year',2024)
          expect(response.body.data).to.have.property('CPU model','Intel Core i9')
          expect(response.body.data).to.have.property('price',3000.99)
          expect(response.body.data).to.have.property('Hard disk size','512 GB')
          expect(response.body.data).to.have.property('color','silver')
        })  
  }
  updateCellphone()       
})

Cypress.Commands.add('deleteCellphones', () => {
  cy.createCellphone().then((response) => {
    expect(response.status).to.eq(200);
    const playerId = response.body.id 
    return playerId
  }).then(playerId => {
    const deleteCellphones = () => {
      cy.api({
          method: 'DELETE',
          url: 'https://api.restful-api.dev/objects/'+playerId,
          failOnStatusCode: false
      }).as('response')
        cy.get('@response').should((response)=>{
          expect(response.status).to.equal(200)
          expect(response.body.message).to.equal('Object with id = ' +playerId+ ' has been deleted.')
      })
  }
  deleteCellphones()       
    });
  });
