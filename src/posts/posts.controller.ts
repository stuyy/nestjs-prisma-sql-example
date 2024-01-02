import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostDto } from './dtos/CreatePost.dto';
import { PostsService } from './posts.service';
import { CreateGroupPostDto } from './dtos/CreateGroupPost.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createPost(@Body() { userId, ...createPostData }: CreatePostDto) {
    return this.postsService.createPost(userId, createPostData);
  }

  // POST /posts/group
  @Post('group')
  @UsePipes(ValidationPipe)
  createGroupPost(
    @Body() { userIds, ...createGroupPostData }: CreateGroupPostDto,
  ) {
    return this.postsService.createGroupPost(userIds, createGroupPostData);
  }

  // GET /posts/group
  @Get('group')
  getGroupPosts() {
    return this.postsService.getGroupPosts();
  }
}
