// Start of Selection
// Start of Selection
import { IsNotEmpty, IsInt } from "class-validator";

// `POST` `/todo` が受け取るリクエストの定義
export class CreateTaskDto {
    @IsNotEmpty()
    title: string;
}

export class UpdateTaskDto {
    @IsNotEmpty()
    //役割: 値が「空でない」ことを検証します。
    @IsInt()
    //役割: 値が整数（整数値）であることを検証します。
    id: number;
}
