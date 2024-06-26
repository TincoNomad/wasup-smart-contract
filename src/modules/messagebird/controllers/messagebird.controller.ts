// Third Party Dependencies
import { Body, Controller, Post, Res } from '@nestjs/common';
import { createCanvas } from 'canvas';
import * as QRCode from 'qrcode';

// Local Dependencies
import { MessagebirdService } from './../services/messagebird.service';
import { EthersService } from './../services/ethers.service';

@Controller('messagebird')
export class MessagebirdController {
  constructor(
    private readonly messagebirdService: MessagebirdService
  ) { }
  /**
   * @memberof MessagebirdController
   * @description Verify if a whatsapp account exists.
   * @param {string} phone The phone number to verify.
   * @returns {object} Returns an object with the verification status and a message.
   */
  @Post('verify-account')
  async verifyAccount(@Body('phone') phone: string) {
    return {
      verified: false,
      number: phone,
      status: 'success',
    };
  }

  /**
   * @memberof MessagebirdController
   * @description Create a new wallet for a whatsapp user.
   * @param {string} phone The phone number to create the wallet.
   * @param {string} password The password to create the wallet.
   * @returns {string} Returns a string with the wallet id.
   */
  @Post('create-wallet')
  async createWallet(
    @Body('phone') phone: string,
    @Body('password') password: string,
  ) {
    console.log('=> phone:', phone);
    await this.messagebirdService.createWallet();
    // const wallet = await this.messagebirdService.createWallet(phone);
    // return {
    //   walletId: wallet.address,
    //   msg: `The wallet was created for the phone ${phone}.`,
    //   status: 'success',
    // };
  }

  /**
   * @memberof MessagebirdController
   * @description Get the balance of a wallet.
   * @param {string} phone The phone number to get the balance.
   * @param {string} password The password to get the balance.
   * @returns {number} Returns the balance of the wallet.
   */
  @Post('wallet-balance')
  async getWalletBalance(
    @Body('phone') phone: string,
    @Body('password') password: string,
  ) {
    const balance = await this.messagebirdService.getBalance(phone);
    return {
      msg: `The wallet balance was requested for the phone ${phone}.`,
      balance,
      currency: 'USDT',
      red: 'ETH',
      status: 'success',
    };
  }

  /**
   * @memberof MessagebirdController
   * @description Get Paid for a wallet.
   * @param {string} phone The phone number to get paid.
   * @param {string} password The password to get paid.
   * @returns {string} Returns the QR code for the payment.
   */
  @Post('wallet-paid')
  async getWalletPaid(
    @Body('phone') phone: string,
    @Body('password') password: string,
  ) {
    const address = await this.messagebirdService.getAddress(phone);
    const canvas = createCanvas(300, 300);
    const context = canvas.getContext('2d');

    context.fillStyle = '#e9ebee';
    context.fillRect(0, 0, 300, 300);

    const data = 'https://www.facebook.com/';

    await QRCode.toCanvas(canvas, data, {
      color: {
        dark: '#4267b2',
        light: '#e9ebee',
      },
    });

    return {
      msg: `The wallet was paid for the phone ${phone}.`,
      img: 'https://i.ibb.co/Jv6B9Sk/image.png',
      status: 'success',
    };
  }

  /**
   * @memberof MessagebirdController
   * @description Comfirm Transaction for a wallet.
   * @param {string} phone The phone number to get paid.
   * @param {string} password The password to get paid.
   * @returns {number} Returns the balance of the wallet.
   */
  @Post('wallet-confirm')
  async getWalletConfirm(
    @Body('phone') phone: string,
    @Body('password') password: string,
  ) {
    return {
      test: `The Transaction was confirmed for the phone ${phone}.`,
      hash: '0x1234567890',
      status: 'success',
    };
  }
}
