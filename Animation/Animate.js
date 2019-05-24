$(document).ready(function() {
	$('#vacations').on('mouseenter', '#box', function() {
		$(this).css('background-color', '#252b30');
		$(this).closest('#box').find('#smaller1').css('background-color', 'BLUE');
		$(this).closest('#box').find('#smaller2').css('background-color', 'WHITE');
	});
	
	$('#vacations').on('mouseleave', '#box', function() {
		$(this).css('background-color', '#FF0000');
		$(this).closest('#box').find('#smaller1').css('background-color', 'yellow');
		$(this).closest('#box').find('#smaller2').css('background-color', 'green');
		
		$(this).toggleClass('.highlighted');
	});
	
	$('#vacations').on('click', '#box', function() {
		var text = $(this).text();
		text = text.trim();
		
		if(text == 'UP')
		{
			$(this).closest('#box').find('#smaller1').text(' ');
			$(this).closest('#box').find('#smaller2').text('DOWN');
			$(this).animate({'top':'100px'}, 600);
		}
		else
		{
			$(this).closest('#box').find('#smaller1').text('UP');
			$(this).closest('#box').find('#smaller2').text(' ');
			$(this).animate({'top':'-10px'}, 800);
		}

	});
	
	$('#box').on('click', function() {
		$(this).toggleClass('.highlighted');
	});
	
});