ServerEvents.recipes(event => {
	event.remove({ id: 'ftbquests:book' })
	
	event.shapeless('ftbquests:book', [
    'minecraft:dirt'
])
  console.log('questbook_recipe_script_has_loaded!')
})
