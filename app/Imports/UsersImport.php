<?php

namespace App\Imports;

use App\Model\User;
use App\Profile;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithCustomChunkSize;
use Ramsey\Uuid\Uuid;
use Exception;
use Maatwebsite\Excel\Validators\Failure;

class UsersImport implements ToModel ,WithBatchInserts ,WithChunkReading,SkipsOnFailure
{
//    use SkipFailures;
    public function model(array $row)
    {
        $existing = User::where('email', $row[3])->first();
        
        if (!$existing)
        {
            $user =  User::firstOrNew ([
                'student_id' => $row[1],
                'name' => $row[2],
                'email' => $row[3],
                'password' => $row[1]
            ]);
    
            return $user;
            
        }
    }

    public function batchSize(): int
    {
        return 50;
    }

    public function chunkSize(): int
    {
        return 50;
    }
    public function onFailure(Failure ...$failures)
    {

    }
}
