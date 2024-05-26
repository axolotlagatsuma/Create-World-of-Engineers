ServerEvents.recipes(event => {
	
	event.remove({ output: 'create_sa:grapplin_whisk' })
	event.remove({ input: 'create_sa:grapplin_whisk' })
	
  console.log('Hello! The recipe event has fired!')
})