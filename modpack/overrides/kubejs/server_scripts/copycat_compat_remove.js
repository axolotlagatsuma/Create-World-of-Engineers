// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')
ServerEvents.recipes(event => {
	// input
	event.remove({ input: 'create_connected:copycat_block' })
	event.remove({ input: 'create_connected:copycat_slab' })
	event.remove({ input: 'create_connected:copycat_beam' })
	event.remove({ input: 'create_connected:copycat_vertical_step' })
	event.remove({ input: 'create_connected:copycat_stairs' })
	event.remove({ input: 'create_connected:copycat_fence' })
	event.remove({ input: 'create_connected:copycat_fence_gate' })
	event.remove({ input: 'create_connected:copycat_wall' })
	event.remove({ input: 'create_connected:copycat_board' })
	event.remove({ input: 'create_connected:copycat_box' })
	event.remove({ input: 'create_connected:copycat_catwalk' })
	// output
	event.remove({ output: 'create_connected:copycat_block' })
	event.remove({ output: 'create_connected:copycat_slab' })
	event.remove({ output: 'create_connected:copycat_beam' })
	event.remove({ output: 'create_connected:copycat_vertical_step' })
	event.remove({ output: 'create_connected:copycat_stairs' })
	event.remove({ output: 'create_connected:copycat_fence' })
	event.remove({ output: 'create_connected:copycat_fence_gate' })
	event.remove({ output: 'create_connected:copycat_wall' })
	event.remove({ output: 'create_connected:copycat_board' })
	event.remove({ output: 'create_connected:copycat_box' })
	event.remove({ output: 'create_connected:copycat_catwalk' })

  console.log('Hello! The recipe event has fired!')
})



	// create_connected:copycat_block
	// create_connected:copycat_slab
	// create_connected:copycat_beam
	// create_connected:copycat_vertical_step
	// create_connected:copycat_stairs
	// create_connected:copycat_fence
	// create_connected:copycat_fence_gate
	// create_connected:copycat_wall
	// create_connected:copycat_board
	// create_connected:copycat_box
	// create_connected:copycat_catwalk