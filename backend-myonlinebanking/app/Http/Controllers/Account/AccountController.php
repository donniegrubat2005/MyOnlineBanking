<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Account;
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

    public function store(Request $request)
    {
        $request->validate([
            'account_number' => 'required',
            'account_name' => 'required',
            'account_type'  => 'required',
            'address'  => 'required',
        ]);

        $this->accountRepo->create($request->all());
        return response()->json('successfully added!');
    }


    public function show($id)
    {
        $account = $this->accountRepo->findbyId($id);
        return response()->json($account);
    }

    public function update($id, Request $request)
    {
        $this->accountRepo->update($id, $request->all());

        return response()->json('successfully updated');
    }


    public function destroy($id)
    {
        $this->accountRepo->delete($id);

        return response()->json('successfully deleted');
    }
}
