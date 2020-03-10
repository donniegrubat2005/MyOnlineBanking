<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Repositories\Account\AccountInterface;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    protected $accountRepo;

    public function __construct(AccountInterface $account)
    {
        $this->accountRepo = $account;
    }

    public function index()
    {
        $accounts = $this->accountRepo->getAll();
        return response()->json($accounts);
    }

    public function store()
    {
    }
}
