import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  createPost(userId: number, data: Prisma.PostCreateWithoutUserInput) {
    return this.prisma.post.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  createGroupPost(
    userIds: number[],
    data: Prisma.GroupPostCreateWithoutUsersInput,
  ) {
    return this.prisma.groupPost.create({
      data: {
        ...data,
        users: {
          create: userIds.map((userId) => ({ userId })),
        },
      },
    });
  }

  getGroupPosts() {
    return this.prisma.groupPost.findMany({
      include: {
        users: {
          select: {
            user: true,
          },
        },
      },
    });
  }
}
