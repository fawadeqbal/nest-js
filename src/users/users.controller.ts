import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll() {
        return []
    }
    @Get('interns')
    findAllInterns() {
        return []
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id }
    }

    @Post()
    create(@Body() user:{}){
        return user
    }

    @Patch()
    update(@Param() id:string,@Body() user:{}){
        return {id,...user}
    }
}
