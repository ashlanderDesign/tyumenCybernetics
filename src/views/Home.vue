<template>
  <div class="content">
    <div class="map">
    <div class="level one">
    	<router-link to="/level" class="level-icon">ICON</router-link>
    </div>
    <div class="level two">
    	<router-link to="/level" class="level-icon">ICON</router-link>
    </div>
    <div class="level three">
    	<router-link to="/level" class="level-icon">ICON</router-link>
    </div>
    <div class="level 4">
    	<router-link to="/level" class="level-icon">ICON</router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>	
	.content{
		padding-top: 10vh;
		background-color: #312b48;
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		color: #fff;	
	}

	.map{
		position: relative;	
		width: 100%;	
		height: 100%;	
	}

	.level{
		position: absolute;
		background-color: #ababab;
		padding: 15px;
		border-radius: 14px;
	}

	.level-icon {
		text-decoration: none;
	}

	.level.one{
		left: 40%;	
		top: 15%;		
	}

	.level.two{
		left: 70%;	
		top: 30%;
	}

	.level.three{
		left: 50%;
		top: 20%;
	}
</style>
