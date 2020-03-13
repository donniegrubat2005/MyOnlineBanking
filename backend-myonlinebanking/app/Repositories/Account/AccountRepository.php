<?php

namespace App\Repositories\Account;

use App\Models\Account;

class AccountRepository implements AccountInterface
{

    protected $accountRepo;

    public function __construct(Account $account)
    {
        $this->accountRepo = $account;
    }

    public function getAll()
    {
        return $this->accountRepo->all();
    }

    public function findbyId($id)
    {
        return $this->accountRepo->findOrFail($id);
    }

    public function create(array $attributes)
    {
        return $this->accountRepo->create($attributes);
    }

    public function update($id, array $attributes)
    {
        return $this->accountRepo->findOrFail($id)->update($attributes);
    }

    public function delete($id)
    {
        return $this->accountRepo->destroy($id);
    }
}
