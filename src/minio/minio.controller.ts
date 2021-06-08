import {Controller, Get, HttpCode, Param, Res, UseGuards} from '@nestjs/common';
import { Response } from 'express';

import { MinioService} from "./minio.service";
import {ApiBearerAuth} from "@nestjs/swagger";
import {AuthGuard} from "@nestjs/passport";

export enum Routes {
    DOWNLOAD = 'download',
}

@Controller('api/download')
export class MinioController {
    constructor(private readonly minioService: MinioService) {}

    @Get(':fileName')
    public async download(
        @Res() response: Response,
        @Param('fileName') fileName: string,
    ) {
        await this.minioService.downloadFile(fileName, response);
    }

}

